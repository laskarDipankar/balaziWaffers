import { CardMedia, Grid, IconButton } from "@mui/material";
import { Container } from "@mui/system";
import { FlavourIcon } from "../FlavourIcon/index";
import chilli from "../../assets/img/redchilli.svg";
import corn from "../../assets/img/corn.svg";
import fire from "../../assets/img/fire.svg";
import { flavour } from "../../recoil/atom";
import { useRecoilState } from "recoil";

const Flavours = () => {
  const [flavourState, setFlavourState] = useRecoilState(flavour);
  return (
    <div>
      <Container
        maxWidth="xl"
        disableGutters={true}
        sx={{
          height: "100%",
        }}
      >
        <Grid
          container
          xl={12}
          mt={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",

            gap: "2rem",
          }}
        >
          <Grid
            item
            xl={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "50%",
            }}
          >
            <FlavourIcon
              sx={{
                backgroundColor: "  green",
              }}
              onClick={() => setFlavourState(chilli)}
            >
              <CardMedia
                height={40}
                // width="70px"
                component="img"
                image={chilli}
                alt="yellow"
              />
            </FlavourIcon>
            <IconButton
              sx={{
                fontSize: "1.5rem",
                justifySelf: "flex-start",
              }}
              onClick={() => setFlavourState(chilli)}
            >
              CHILLI
            </IconButton>
          </Grid>
          <Grid
            item
            xl={12}
            sx={{
              display: "flex",

              width: "50%",

              justifyContent: "space-between",
            }}
          >
            <FlavourIcon
              sx={{
                backgroundColor: "  red",
                width: "50%",
              }}
              onClick={() => setFlavourState(corn)}
            >
              <CardMedia
                height={30}
                // width="70px"
                component="img"
                image={corn}
                alt="yellow"
              />
            </FlavourIcon>
            <IconButton
              sx={{
                fontSize: "1.5rem",
                justifySelf: "flex-start",
              }}
              onClick={() => setFlavourState(corn)}
            >
              CORN
            </IconButton>
          </Grid>
          <Grid
            item
            xl={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "50%",
            }}
          >
            <FlavourIcon
              sx={{
                backgroundColor: "  orange",
              }}
              onClick={() => setFlavourState(fire)}
            >
              <CardMedia
                height="70px"
                component="img"
                src={fire}
                alt="yellow"
              />
            </FlavourIcon>
            <IconButton
              sx={{
                fontSize: "1.5rem",
                justifySelf: "flex-start",
              }}
              onClick={() => setFlavourState(fire)}
            >
              FIRE
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Flavours;
