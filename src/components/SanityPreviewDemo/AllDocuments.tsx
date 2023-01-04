export const AllDocuments = ({ data }) => {
  return (
    <>
      <div>{data.length}</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
