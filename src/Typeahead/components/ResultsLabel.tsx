export type ResultsLabelProps = {
  length: number;
};

export const ResultsLabel = ({ length }: ResultsLabelProps): JSX.Element => {
  let label = '';

  if (length === 1) {
    label = '1 result';
  } else if (length > 1) {
    label = `${length} results`;
  } else {
    label = '0 results';
  }

  return (
    <div style={{ padding: '14px 12px' }}>
      <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase' }}>
        {label}
      </span>
    </div>
  );
};
