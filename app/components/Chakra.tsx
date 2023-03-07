import {
  Alert,
  AlertIcon,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';

const Chakra: FC = () => {
  return (
    <>
      <Heading mb={2}>Chakra UI</Heading>

      <Stack spacing={4} direction="row" align="center" mb={2}>
        <Button colorScheme="teal" size="xs">
          Button
        </Button>
        <Button colorScheme="teal" size="sm">
          Button
        </Button>
        <Button colorScheme="teal" size="md">
          Button
        </Button>
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
      </Stack>

      <Stack spacing={3} mb={2}>
        <Alert status="error">
          <AlertIcon />
          Error表示のアラート
        </Alert>
        <Alert status="success">
          <AlertIcon />
          Success表示のアラート
        </Alert>
        <Alert status="warning">
          <AlertIcon />
          Warning表示のアラート
        </Alert>
        <Alert status="info">
          <AlertIcon />
          Info表示のアラート
        </Alert>
      </Stack>

      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '200px' }}
          src="https://emoshu.co.jp/theme/emoshu/img/emoshu_icon.jpg"
          alt="EMoshU"
        />

        <Stack>
          <CardBody>
            <Heading size="md">株式会社EMoshU</Heading>

            <Text py="2">
              EMoshU（エモッシュ）は「あらゆる人の人生が好転するプロダクトを創り続ける」をミッションとし、CtoCのプロダクトを開発しながら、受託開発でアプリの開発事業を展開しています。個性あふれる優秀な仲間と共に、プロダクトを創り続けて参ります。
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Read more
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
};

export default Chakra;
