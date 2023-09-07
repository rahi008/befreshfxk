interface PageProps {
  params: { currencyCode: string };
}

export default async function Page({ params: { currencyCode } }: PageProps) {
  const currency = currencyCode;
  return (
    <div>
      <label className="m-8 p-8 text-xl text-white">{currency}</label>
    </div>
  );
}
