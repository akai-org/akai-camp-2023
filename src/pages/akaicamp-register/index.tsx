import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const filePath = "/statute.pdf";

  context.res.setHeader("Location", filePath);
  context.res.statusCode = 302;
  context.res.end();

  return {
    props: {},
  };
}

const AkaicampRegister = () => {
  return null;
};

export default AkaicampRegister;
