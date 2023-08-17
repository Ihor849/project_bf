import { HomeTitle, HomeWrapper } from "./pages.styled/Pages.styled";
import image from '../images/home_m.png';


export default function Home() {
  

  return (
    <HomeWrapper>
      <HomeTitle> Take good care of your small pets</HomeTitle>
      <img
        src={image}
        srcSet={`${image} 1x, ${image} 2x`}
        alt="dogs"
        width="200"
      />
    </HomeWrapper>
  );
}
