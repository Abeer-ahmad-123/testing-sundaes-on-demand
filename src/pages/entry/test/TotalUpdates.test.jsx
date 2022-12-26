import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Options from '../Options';

test('update scoops subTotal when scoops changes', async () => {
  const user = userEvent.setup();
  render(<Options optionsType="scoops" />);

  //make sure total starts at 0.00
  const scoopSubtotal = screen.getByText('Scoops total: $', { exact: false });
  expect(scoopSubtotal).toHaveTextContent('0.00');

  //update the vanilla scoops to 1 and check the subTotal
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });
  await user.clear(vanillaInput);
  await user.type(vanillaInput, '1');
  expect(scoopSubtotal).toHaveTextContent('2.00');

  //update the chocolate scoops to 2 and check sub total
  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  });
  await user.clear(chocolateInput);
  await user.type(chocolateInput, '2');
  expect(scoopSubtotal).toHaveTextContent('6.00');
});
