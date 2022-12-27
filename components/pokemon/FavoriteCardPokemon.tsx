import { FC } from "react";
import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

interface IProps {
  pokemonId: number;
}

export const FavoriteCardPokemon: FC<IProps> = ({ pokemonId }) => {
  const router = useRouter();
  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Grid
      key={pokemonId}
      xs={6}
      sm={3}
      md={2}
      xl={1}
      onClick={onFavoriteClicked}
    >
      <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image
          width={"100%"}
          height={140}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
        />
      </Card>
    </Grid>
  );
};
