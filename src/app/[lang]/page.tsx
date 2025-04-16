import useTranslations from "@/hooks/translations";

type HomeProps = Readonly<{
  params: Promise<{ lang: string }>;
}>;

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'pt-br' },
  ];
}

export default function Home({ params }: HomeProps) {
  const { t } = useTranslations(params);

  return (
    <div className="flex flex-col items-center justify-center gap-8 mx-auto max-w-3xl">
      <h1 className="text-4xl font-bold text-center">
        {t("home.hi")}
      </h1>
      <p>
        {t("home.intro")}
      </p>
    </div>
  );
}
