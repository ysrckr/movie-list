import { ToastContainer } from 'react-toastify';
import { useGetMovieById } from '../hooks/useGetMovieById';
import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'wouter';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Loader } from '../components/Loader';

type Props = {
  id: string;
};

export const MoviePage: FC<Props> = ({id}) => {
  const { data: movie, isLoading } = useGetMovieById(id);

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  return (
    <div>
      <ToastContainer />
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        color="info"
        sx={{ mb: 2 }}
      >
        <Link href="/">Go Back</Link>
      </Button>

      <Box className="grid grid-cols-1 items-center justify-items-center gap-4 mt-10">
        <img
          src={movie?.primaryImage.url}
          alt={movie?.primaryImage.caption.plainText}
          width="500px"
          className="rounded-md items-center justify-center"
        />
        <Typography variant="h3" className="text-indigo-600">
          {movie?.titleText.text}
        </Typography>
        <Typography variant="h6" className="text-purple-600">
          {movie?.releaseYear.year}
        </Typography>
        <Typography className="w-1/2 text-center text-gray-800">
          {movie?.primaryImage.caption.plainText}
        </Typography>
      </Box>
    </div>
  );
};
