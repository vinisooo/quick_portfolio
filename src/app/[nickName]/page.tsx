import UserPortfolioPage from '@/pages/UserPage';

interface PageProps {
  params: {
    nickName: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { nickName } = params;

  return <UserPortfolioPage nickName={nickName} />;
};

export default Page;
