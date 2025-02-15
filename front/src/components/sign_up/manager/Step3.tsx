import TitleText from "@/components/common/TitleText";
import InputField from "@/components/sign_up/InputField";

interface ManagerStep3Props {
  business: string;
  siteurl: string;
  onBusinessChange: (value: string) => void;
  onSiteurlChange: (value: string) => void;
}

export default function ManagerStep3({
  business,
  siteurl,
  onBusinessChange,
  onSiteurlChange,
}: ManagerStep3Props) {
  return (
    <div>
      <TitleText text1="사업자 등록 번호를 입력해주세요." text2="" on={true} />

      <form className="flex flex-col justify-center items-center align-center pt-[25px]">
        <InputField
          label="사업자 등록 번호"
          value={business}
          onChange={onBusinessChange}
          placeholder="사업자 등록 번호를 입력해주세요. (선택)"
          on={false}
        />
        <div className="h-[50px]" />
        <TitleText
          text1="센터 사이트 주소를 입력해주세요."
          text2=""
          on={true}
        />
        <div className="h-[25px]" />

        <InputField
          label="센터 사이트 주소"
          value={siteurl}
          onChange={onSiteurlChange}
          placeholder="센터 사이트 주소를 입력해주세요. (선택)"
          on={false}
        />
        <div className="h-[297px]" />
      </form>
    </div>
  );
}
