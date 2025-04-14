import useTranslations from "@/hooks/translations";

type HomeProps = Readonly<{
  params: Promise<{ lang: string }>;
}>;

export default async function Home({ params }: HomeProps) {
  const { lang } = await params;
  const { t } = useTranslations(lang);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1>
        {t("home.hi")}
        <br />
        {t("home.intro")}
      </h1>
    </div>
  );
}
