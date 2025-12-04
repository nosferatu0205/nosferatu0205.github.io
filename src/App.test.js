test('renders portfolio logo', () => {
  render(<App />);
  const linkElement = screen.getByText(/Portfolio./i);
  expect(linkElement).toBeInTheDocument();
});
