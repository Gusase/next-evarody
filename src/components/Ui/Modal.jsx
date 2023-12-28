"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import EmbedPlayer from "../Partials/Anime/EmbedPlayer";
import PrimaryButton from "./PrimaryButton";

const ModalBox = ({
  children,
  header,
  footer,
  content,
  id,
  txt,
  className,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const renderContent = () => {
    switch (content) {
      case "text":
        return <div>{txt}</div>;
      case "embed":
        return <EmbedPlayer id={id} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Button onPress={onOpen} className={className} disableRipple>
        {children}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="3xl"
        classNames={{
          base: "p-0 bg-none",
          body: "bg-transparent",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {header}
              </ModalHeader>
              <ModalBody>{renderContent()}</ModalBody>
              {footer && (
                <ModalFooter>
                  <PrimaryButton
                    className="relative inline-flex items-center rounded-full active:scale-[.98] disabled:bg-white/80 disabled:cursor-not-allowed bg-white px-2 py-1.5 text-sm font-normal mx-auto sm:mx-0 text-neutral-950 transition hover:bg-neutral-200 min-[414px]:w-36 w-max"
                    handleClick={onClose}
                  >
                    Close
                  </PrimaryButton>
                </ModalFooter>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalBox;
