const PageLoader = () => (
  <div className="flex h-screen items-center justify-center bg-background text-foreground">
    <div className="text-center">
      <div className="inline-block h-12 w-12 animate-spin rounded-full border-b-2 border-primary"></div>
      <p className="mt-4 text-muted-foreground">Yuklanmoqda...</p>
    </div>
  </div>
);

export default PageLoader;
