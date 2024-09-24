import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const FooterPage = () => {
  return (
    <Box
      as="footer"
      bg="purple.500"
      color="white"
      py={4}
      textAlign="center"
      position="relative"
      bottom={0}
      width="100%"
    >
      <Text>This page was created by Tahesha Orji 2024.</Text>
    </Box>
  );
};

export default FooterPage;