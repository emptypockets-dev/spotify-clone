"use client";

import React, { FC, useEffect } from "react";
import Modal from "@/components/Modal";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import useAuthModal from "@/hooks/useAuthModal";

interface AuthModalProps {}

const AuthModal: FC<AuthModalProps> = ({}) => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <>
      <Modal
        title="welcome back"
        description="please sign in to continue"
        isOpen={isOpen}
        onChange={onChange}
      >
        <Auth
          theme="dark"
          magicLink
          providers={["github"]}
          supabaseClient={supabaseClient}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#404040",
                  brandAccent: "#22c55e",
                },
              },
            },
          }}
        />
      </Modal>
    </>
  );
};

export default AuthModal;
