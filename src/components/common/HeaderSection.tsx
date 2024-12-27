import Link from "next/link";
import ArrowLeft from './../icons/ArrowLeft';
import TextAnimation from "../common/TextAnimation";


interface HeaderSectionProps {
    Header: string,
    Description?: string,
    ShowMore?: string
}


const HeaderSection: React.FC<HeaderSectionProps> = ({Header , Description , ShowMore}) => {


  return (
    <div className="flex justify-between py-8">
      <div>
          {/* <h2 className="uppercase text-secondery-default font-semibold text-2xl pb-4">{Header}</h2> */}

          <TextAnimation text={Header} />
          
          <p className="indent-4 text-opacity-700 text-md">{Description}</p>
      </div>

      {ShowMore && <Link href="/" className="flex items-center gap-2 text-primary-default hover:opacity-70">
          {ShowMore}
          <ArrowLeft />
      </Link>
      }
    </div>
  );

};


  
  export default HeaderSection
  