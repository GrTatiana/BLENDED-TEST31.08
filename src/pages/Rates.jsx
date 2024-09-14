import { Wave } from 'react-animated-text';

import { Container, Heading, Section } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBaseCurrency,
  selectError,
  selectRates,
} from '../redux/selectors';
import { useEffect } from 'react';
import { fetchLatestSymbols } from '../redux/currency/operations';

const Rates = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectError);
  // const isLoading = useSelector(selectIsLoading);
  const rates = useSelector(selectRates);
  const baseCurrency = useSelector(selectBaseCurrency);

  useEffect(() => {
    console.log('Hello');
    dispatch(fetchLatestSymbols(baseCurrency));
  }, [baseCurrency, dispatch]);

  console.log(rates);
  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${baseCurrency} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Rates;
