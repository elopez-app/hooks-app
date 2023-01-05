import { useCounter, useFetch } from "../hooks";
import { Loader, Quote } from "../03-example/components";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;

  const { data, isLoading, hasError } = useFetch(url);

  const quote = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <Loader /> : <Quote {...quote} />}

      <button
        disabled={isLoading}
        onClick={increment}
        className="btn btn-primary"
      >
        Next quote
      </button>
    </>
  );
};
