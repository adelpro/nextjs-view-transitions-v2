export type Pokemon = {
  id: number;
  name: string;
  imageUrl: string;
  url: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};
