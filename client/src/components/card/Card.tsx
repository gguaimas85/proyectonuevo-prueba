import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";

type CardProps = {
  address: string;
  description: string;
  pictures: Pictures[];
  type: string;
  id: number;
  operation: string;
};

type Pictures = {
  img: string;
};

export const CardComponent: React.FC<CardProps> = ({
  address,
  description,
  pictures,
  type,
  id,
  operation,
}) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" src={pictures[0].img} height="150" alt="imagen" />
        <CardContent>
          <Typography variant="h4" mt={1}>
            {type}
          </Typography>
          <Typography component="h6" variant="body2" mt={1}>
            {address}
          </Typography>
          <Chip label={operation} color="primary" />
          <Typography component="h5" variant="body2" mt={1}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="#">
          <Button variant="contained" sx={{ margin: 1 }}>
            Hacer Reserva
          </Button>
        </Link>
        <Link to={`/property/${id}`}>
          <Button variant="outlined">Mas Informacion</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
