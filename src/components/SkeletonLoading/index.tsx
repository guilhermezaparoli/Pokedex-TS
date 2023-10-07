import { useState } from "react";
import { Container, Skeleton } from "./styles";


type SkeletonLoadingProps = {
  src: string;

};

export const SkeletonLoading = ({ src }: SkeletonLoadingProps) => {
  const [skeleton, setSkeleton] = useState(true);

  return (
    <Container skeleton={skeleton}>
      {skeleton && <Skeleton />}
      <img
        onLoad={() => setSkeleton(false)}
        src={src}
        width="50"
        height="50"
      />
    </Container>
  );
};