import { GameResultCode } from "@utils/constants";
import {
  ResultTextContainer,
  ResultText,
  AgainContainer,
  AgainText,
} from "./style";

interface Props {
  result: number;
  resetPick: () => void;
}

const Result: React.FC<Props> = ({ result, resetPick }) => {
  console.log(result);
  switch (result) {
    case GameResultCode.DRAW:
      return (
        <ResultTextContainer>
          <ResultText>Draw</ResultText>
          <AgainContainer onClick={resetPick}>
            <AgainText>Play Again</AgainText>
          </AgainContainer>
        </ResultTextContainer>
      );
    case GameResultCode.LOSE:
      return (
        <ResultTextContainer>
          <ResultText>You Lose</ResultText>
          <AgainContainer onClick={resetPick}>
            <AgainText>Play Again</AgainText>
          </AgainContainer>
        </ResultTextContainer>
      );
    case GameResultCode.WIN:
      return (
        <ResultTextContainer>
          <ResultText>You Win</ResultText>
          <AgainContainer onClick={resetPick}>
            <AgainText>Play Again</AgainText>
          </AgainContainer>
        </ResultTextContainer>
      );
    default:
      return <div>default</div>;
  }
};

export default Result;
