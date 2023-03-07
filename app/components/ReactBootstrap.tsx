import { FC } from 'react';
import { Alert, Button, Card, Image, Stack } from 'react-bootstrap';

const ReactBootstrap: FC = () => {
  return (
    <>
      <h2>React Bootstrap</h2>
      <div className="mb-2">
        <Button variant="success" size="sm" className="mx-2">
          Button
        </Button>
        <Button variant="success" size="md" className="mx-2">
          Button
        </Button>
        <Button variant="success" size="lg" className="mx-2">
          Button
        </Button>
      </div>
      <div className="mb-2">
        <Alert variant="danger">Error表示のアラート</Alert>
        <Alert variant="success">Success表示のアラート</Alert>
        <Alert variant="warning">Warning表示のアラート</Alert>
        <Alert variant="info">Info表示のアラート</Alert>
      </div>
      <Stack direction="horizontal" className="border">
        <Image
          src="https://emoshu.co.jp/theme/emoshu/img/emoshu_icon.jpg"
          className="w-25"
        />
        <Stack direction="vertical" className="p-3">
          <h3>株式会社EMoshU</h3>
          <p className="mb-5">
            EMoshU（エモッシュ）は「あらゆる人の人生が好転するプロダクトを創り続ける」をミッションとし、CtoCのプロダクトを開発しながら、受託開発でアプリの開発事業を展開しています。個性あふれる優秀な仲間と共に、プロダクトを創り続けて参ります。
          </p>
          <Button variant="primary" size="lg" className="w-25">
            Read more
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default ReactBootstrap;
