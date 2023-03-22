import {
  Box,
  Flex,
  Heading,
  Container,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
  Button,
  Stack,
  FormErrorMessage,
  Textarea
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
require('dotenv').config();

const Contact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  function onSubmit(values) {
    const data = JSON.stringify(values, null, 2);
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: data
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        alert('Response succeeded!');
      }
    });
  }

  return (
    <Box
      id="#contact"
      borderBottom={`2px solid ${useColorModeValue('#37393F', '#37393F')}`}
      h="calc(90vh)"
    >
      <Flex
        direction="column"
        alignItems="space-between"
        h="full"
        m={{ base: '30px', md: '40px' }}
        // m={{ base: 'auto', md: 'auto' }}
      >
        <Heading as="h2" variant="page-title" size="2xl">
          Contact
        </Heading>

        <Container alignSelf="center" margin="auto">
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isRequired isInvalid={errors.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  placeholder="name"
                  errorBorderColor="red.300"
                  {...register('name', {
                    required: 'This is required',
                    minLength: {
                      value: 4,
                      message: 'Minimum length should be 4'
                    }
                  })}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errors.email}>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="email address"
                  {...register('email', {
                    required: 'This is required'
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  type="text"
                  placeholder="message..."
                  {...register('message', {
                    required: 'This is required'
                  })}
                />
              </FormControl>
              <Button
                w="fit-content"
                mt={4}
                isLoading={isSubmitting}
                // type="submit"
                variant="submit-button"
              >
                Submit
              </Button>
            </form>
          </Stack>
        </Container>
      </Flex>
    </Box>
  );
};

export default Contact;
