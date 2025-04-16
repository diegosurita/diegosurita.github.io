import useTranslations from "@/hooks/translations";

type HomeProps = Readonly<{
  params: Promise<{ lang: string }>;
}>;

const HomeContent = ({ lang }: { lang: string }) => {
  const { t } = useTranslations(lang);
  
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

export default async function Home({ params }: HomeProps) {
  const { lang } = await params;
  
  return <HomeContent lang={lang} />;
}
