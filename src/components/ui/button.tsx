"use client";
import React from "react";
import { Modal, ModalTrigger } from "@/widgets/animatedbutton";
import { VLDark } from "../../../public/img";

export function Button() {
  return (
    <div className="py-0  flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-80 text-center transition duration-500">
            Visit Vetor labs Marketplace
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20 lg:h-10 lg:w-10 h-10 w-5 flex justify-center items-center mx-auto">
            <img src={VLDark.src} alt="Vetor lab" />
          </div>
        </ModalTrigger>
      </Modal>
    </div>
  );
}
