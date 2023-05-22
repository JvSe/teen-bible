"use client"
import { Flex, Image, chakra, useColorModeValue, keyframes } from '@chakra-ui/react'
import { SocialButton } from './components/SocialButton';
import { FcGoogle } from 'react-icons/fc';
import { FaTwitter } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import { motion, useMotionTemplate, useSpring } from 'framer-motion';

const FlexMotion = chakra(motion.div);

const gradient = keyframes`
  0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const scrollBg = keyframes`
  from {background-position: top;background-size:2320px; }
  to {background-position: -500px 0px;background-size:2320px;}
`

export default function Home() {

  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  let maskImage = useMotionTemplate`radial-gradient(140px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  const gradientAnimation = `${gradient} 15s ease infinite`


  const bgButtonSocial = useColorModeValue('white', '#161F26')
  const borderButtonSocial = useColorModeValue('none', '1px solid #767676')
  const colorTextButtonSocialGoogle = useColorModeValue('#00000080', 'gray.600');
  return (
    <Flex
      pos="absolute"
      w="full"
      h="full"
      bgImage="url(/bg.png)"
      bgSize="50%"
      animation={`${scrollBg} 35s linear forwards`}
    >

      <Flex
        pos="relative"
        w="full"
        h="full"
        align="center"
        justify="center"
        gap={2}
        transition="0.5s ease"
        overflow="hidden"

        onMouseMove={onMouseMove}
      >

        {/* <FlexMotion
        style={style}
        position="absolute"
        w="full"
        h="full"
        bg="red.100"
      /> */}



        <Flex
          w="30%"
          h="50%"
          align="center"
          justify="center"
          flexDir="column"
          gap={6}
          bg="rgba(255, 255, 255, 0.26)"
          borderRadius="16px"
          boxShadow=" 0 4px 30px rgba(0, 0, 0, 0.1)"
          backdropFilter="blur(7.4px)"
          border="1px solid rgba(255, 255, 255, 0.78)"
        >
          <Image
            h="28%"
            src="/logo-teen.png"
            filter="drop-shadow(5px 5px 5px rgba(0,0,0,0.3))"
          />
          <SocialButton
            icon={FcGoogle}
            bg={bgButtonSocial}
            border={borderButtonSocial}
            color={colorTextButtonSocialGoogle}
            w={{ base: "100%", lg: 80 }}
            h="4.7rem"
            boxShadow="base"
            onClick={() => signIn('google')}
          >
            Entrar com Google
          </SocialButton>
          <SocialButton
            icon={FaTwitter}
            bg={bgButtonSocial}
            border={borderButtonSocial}
            w={{ base: "100%", lg: 80 }}
            h="4.7rem"
            boxShadow="base"
            onClick={() => signIn('google')}
          >
            Entrar com Twitter
          </SocialButton>
        </Flex>
      </Flex>
    </Flex>

  )
}
