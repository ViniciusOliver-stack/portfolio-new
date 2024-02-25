'use client'

import React from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Textarea,
} from '@nextui-org/react'
import { Button } from '@/app/components/button'
import { FaArrowRight } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Por favor, digite um nome válido' })
    .max(100),
  email: z.string().email({ message: 'Por favor, digite um email válido' }),
  message: z
    .string()
    .min(1)
    .max(500, { message: 'A mensagem não pode ter mais de 500 caracteres' }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ButtonModalContact() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const { handleSubmit, register } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <>
      <Button
        onClick={onOpen}
        className='relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px]
              w-max
            border-neutral-700 px-4 py-3 font-medium
            text-neutral-300 transition-all duration-300
              before:absolute before:inset-0
              before:-z-10 before:translate-y-[200%]
              before:scale-[2.5]
              before:rounded-[100%] before:bg-neutral-50
              before:transition-transform before:duration-1000
              before:content-[""]
              hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
              hover:before:translate-y-[0%]
              active:scale-100'
      >
        Entre em contato
        <FaArrowRight />
      </Button>
      <Modal
        isOpen={isOpen}
        backdrop="blur"
        onOpenChange={onOpenChange}
        placement="top-center"
        className="bg-neutral-900"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col ">
                <h1>Vamos trabalhar juntos?</h1>
                <p className="text-xs">Entre em contato e vamos conversar!</p>
              </ModalHeader>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalBody>
                  <Input
                    autoFocus
                    label="Nome"
                    placeholder="Digite o seu nome"
                    variant="underlined"
                    {...register('name')}
                  />
                  <Input
                    label="Email"
                    placeholder="Digite o seu e-mail"
                    type="text"
                    variant="underlined"
                    {...register('email')}
                  />
                  <Textarea
                    placeholder="Deixe a sua mensagem"
                    variant="bordered"
                    {...register('message')}
                  />

                  <Button
                    onClick={onOpen}
                    className='relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] w-max border-neutral-700 px-4 py-3 font-medium text-neutral-300 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5] before:rounded-[100%] before:bg-emerald-400 before:transition-transform before:duration-1000 before:content-[""] hover:scale-105 hover:border-neutral-50 hover:text-white hover:before:translate-y-[0%] active:scale-100'
                  >
                    Enviar mensagem
                    <FaArrowRight />
                  </Button>
                </ModalBody>
              </form>
              <ModalFooter>
                <Button color="danger" onClick={onClose}>
                  Fechar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
