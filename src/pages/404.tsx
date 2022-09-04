import React, { FC } from "react";
import PageLayout from "@components/page-layout";

const NotFoundPage: FC<{ location: Location }> = () => {
  return (
    <PageLayout id="">
      <main>
        <title>Not found</title>
        <p>Page not found</p>
      </main>
    </PageLayout>
  );
};

export default NotFoundPage;
