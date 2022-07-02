import { GameResultCode } from "@utils/constants";
import {
  ResultTextContainer,
  ResultTextFlex,
  ResultText,
  AgainContainer,
  AgainText,
} from "./style";

interface Props {
  result: number;
  resetPick: () => void;
}

const Result: React.FC<Props> = ({ result, resetPick }) => {
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
          <ResultTextFlex>
            <ResultText>You</ResultText>
            <ResultText>Lose</ResultText>
          </ResultTextFlex>
          <AgainContainer onClick={resetPick}>
            <AgainText>Play Again</AgainText>
          </AgainContainer>
        </ResultTextContainer>
      );
    case GameResultCode.WIN:
      return (
        <ResultTextContainer>
          <ResultTextFlex>
            <ResultText>You</ResultText>
            <ResultText>Win</ResultText>
          </ResultTextFlex>
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
