import {
  Button,
  Typography,
  Box,
  Alert,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import { FC } from 'react';

const Mui: FC = () => {
  return (
    <>
      <Typography variant="h4" fontWeight="fontWeightBold" sx={{ mb: 2 }}>
        MUI（Material UI）
      </Typography>
      <Box sx={{ '& button': { mx: 1, mb: 2 } }}>
        <Button
          variant="contained"
          size="small"
          sx={'background-color: #319795'}
        >
          Button
        </Button>
        <Button
          variant="contained"
          size="medium"
          sx={'background-color: #319795'}
        >
          Button
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={'background-color: #319795'}
        >
          Button
        </Button>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          Error表示のアラート
        </Alert>
        <Alert severity="success" sx={{ mb: 2 }}>
          Success表示のアラート
        </Alert>
        <Alert severity="warning" sx={{ mb: 2 }}>
          Warning表示のアラート
        </Alert>
        <Alert severity="info" sx={{ mb: 2 }}>
          Info表示のアラート
        </Alert>
      </Box>
      <Card>
        <CardMedia image="https://emoshu.co.jp/theme/emoshu/img/emoshu_icon.jpg" />
      </Card>
      <Card sx={{ border: '0.5px solid #ccc', display: 'flex' }}>
        <CardMedia
          sx={{ maxWidth: '100%', width: '200px', height: '240px' }}
          image="https://emoshu.co.jp/theme/emoshu/img/emoshu_icon.jpg"
          title="EMoshU"
        />
        <CardContent sx={{ width: 'calc(100% - 200px)' }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="fontWeightBold"
          >
            株式会社EMoshU
          </Typography>
          <div style={{ marginBottom: '25px' }}>
            <Typography variant="body" color="text.main">
              EMoshU（エモッシュ）は「あらゆる人の人生が好転するプロダクトを創り続ける」をミッションとし、CtoCのプロダクトを開発しながら、受託開発でアプリの開発事業を展開しています。個性あふれる優秀な仲間と共に、プロダクトを創り続けて参ります。
            </Typography>
          </div>
          <CardActions>
            <Button variant="contained" size="large">
              Read more
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default Mui;
