"use client"
import { Button, Flex, Text, Image } from '@chakra-ui/react'


export default function PartySelect() {
  return (
    <Flex
      w="full"
      h="full"
      align="center"
      justify="center"
      gap={2}
      transition="0.5s ease"
      overflow="hidden"
    >

      <Flex pos="relative" w="full" h="full" bg="#010101" >
        <Text color="white" fontFamily="IceCreamSolid">NOITE DA RAPAZIADA</Text>
        <Image
          pos="absolute"
          bottom={0}
          left={0}
          h="60%"
          transition="0.5s ease"
          src='/img.png'
          _hover={{
            transform: 'scale(1.05)'
          }}
        />
      </Flex>
      <Flex
        pos="relative"
        w="full"
        h="full"
        bg="#FBE2E6"

      >
        <Text color="white" fontFamily="IceCreamSolid">NOITE DO PIJAMA</Text>
        <Image
          pos="absolute"
          bottom={-10}
          right={0}
          h="65%"
          src="/02.png"
          transition="0.5s ease"
          _hover={{
            transform: 'scale(1.05)'
          }}
        />
      </Flex>
      <Flex pos="absolute" alignSelf="flex-start" w="full" justify="center" >

        <Text color="white" fontFamily="IceCreamSolid" fontSize="4xl" w="30%">Ola! Seja muito bem vindo, antes de comecar, me diga, de qual evento voce esta vindo?</Text>
      </Flex>

    </Flex>
  )
}