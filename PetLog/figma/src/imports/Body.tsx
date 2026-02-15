import svgPaths from "./svg-sh32avfvjt";
import imgPetAvatar from "figma:asset/271c54a86a83a0116fcf90c1b9beb0065c3bdcf9.png";

function PetAvatar() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[60px]" data-name="Pet Avatar">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPetAvatar} />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[64px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <PetAvatar />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#ffedd5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[2]" data-name="Container">
      <Border />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[20px] w-[40px]">
        <p className="leading-[28px] whitespace-pre-wrap">密密</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[15.667px]" data-name="Margin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6667 11.0833">
        <g id="Margin">
          <path d={svgPaths.p21bafb00} fill="var(--fill-0, #FDBA74)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Margin1 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f5e6ff] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[6px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#a855f7] text-[10px] w-[30px]">
        <p className="leading-[15px] whitespace-pre-wrap">布偶猫</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e6f4ff] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[6px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#0ea5e9] text-[10px] w-[15.91px]">
        <p className="leading-[15px] whitespace-pre-wrap">3天</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#fff0e6] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[6px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#ff8a3d] text-[10px] w-[26.89px]">
        <p className="leading-[15px] whitespace-pre-wrap">3.5kg</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full" data-name="Container">
      <Background />
      <Background1 />
      <Background2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0 z-[1]" data-name="Margin">
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0" data-name="Container">
      <Container2 />
      <Margin />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28px] leading-[0] relative shrink-0 text-right w-[77.36px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Medium',sans-serif] font-medium h-[17px] justify-center right-[24.11px] text-[#94a3b8] text-[11px] top-[17px] w-[53.25px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">{`今日待办 / `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[28px] justify-center right-[13.48px] text-[#ff8a3d] text-[18px] top-[14px] w-[10.63px]">
        <p className="leading-[28px] whitespace-pre-wrap">0</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Medium',sans-serif] font-medium h-[17px] justify-center right-0 text-[#94a3b8] text-[11px] top-[17px] w-[13.48px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">{` 项`}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Paragraph />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[16.708px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.7083">
        <g id="Container">
          <path d={svgPaths.pd302580} fill="var(--fill-0, #FB923C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Noto_Sans_SC:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(154,52,18,0.7)] w-[168px]">
        <p className="leading-[20px] whitespace-pre-wrap">每天都有一只小美好在等你</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Container7 />
        <Margin2 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[7px] mr-[-0.01px] relative shrink-0 w-[4.317px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31667 7">
        <g id="Container">
          <path d={svgPaths.p35022f90} fill="var(--fill-0, #FB923C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pr-[0.01px] relative">
        <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] mr-[-0.01px] relative shrink-0 text-[#fb923c] text-[12px] text-center w-[48.02px]">
          <p className="leading-[16px] whitespace-pre-wrap">设置提醒</p>
        </div>
        <Container8 />
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(255,247,237,0.5)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,237,213,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[13px] relative w-full">
          <Container6 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[20px] relative rounded-[24px] shadow-[0px_8px_24px_0px_rgba(255,138,61,0.08)] shrink-0 w-full mx-[16px]" data-name="Header">
      <Container />
      <OverlayBorder />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p20a2f200} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#7ec1ff] content-stretch flex items-center justify-center relative rounded-[16px] shadow-[0px_8px_24px_0px_rgba(255,138,61,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <Container9 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start pb-[12px] relative shrink-0 w-[48px]" data-name="Margin">
      <BackgroundShadow />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] text-center w-[56px]">
        <p className="leading-[20px] whitespace-pre-wrap">记录看病</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-center w-[70px]">
        <p className="leading-[15px] whitespace-pre-wrap">记录日常并监测</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute right-[16px] size-[50px] top-[8px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Container" opacity="0.1">
          <path d={svgPaths.p1a656c00} fill="var(--fill-0, #1E293B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#eef6ff] content-stretch flex flex-col h-[144px] items-center justify-center left-0 overflow-clip px-[50.5px] py-[20px] rounded-[40px] top-0" data-name="Button">
      <Margin3 />
      <Container10 />
      <Margin4 />
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3ae66580} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-[#ff9eb5] content-stretch flex items-center justify-center relative rounded-[16px] shadow-[0px_8px_24px_0px_rgba(255,138,61,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <Container13 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start pb-[12px] relative shrink-0 w-[48px]" data-name="Margin">
      <BackgroundShadow1 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] text-center w-[56px]">
        <p className="leading-[20px] whitespace-pre-wrap">记录症状</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-center w-[51.61px]">
        <p className="leading-[15px] whitespace-pre-wrap">时刻关注TA</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[51.25px] right-[16px] top-[8px] w-[52.5px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.5 51.25">
        <g id="Container" opacity="0.1">
          <path d={svgPaths.pbffcc00} fill="var(--fill-0, #1E293B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#fff0f3] content-stretch flex flex-col h-[144px] items-center justify-center left-[187px] overflow-clip px-[57.5px] py-[20px] rounded-[40px] top-0" data-name="Button">
      <Margin5 />
      <Container14 />
      <Margin6 />
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p22be0c00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="bg-[#ff8a3d] content-stretch flex items-center justify-center relative rounded-[16px] shadow-[0px_8px_24px_0px_rgba(255,138,61,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <Container17 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start pb-[12px] relative shrink-0 w-[48px]" data-name="Margin">
      <BackgroundShadow2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] text-center w-[56px]">
        <p className="leading-[20px] whitespace-pre-wrap">上传报告</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-center w-[70px]">
        <p className="leading-[15px] whitespace-pre-wrap">配料表识别分析</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute right-[16px] size-[50px] top-[8px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Container" opacity="0.1">
          <path d={svgPaths.p1ede0e80} fill="var(--fill-0, #1E293B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#fdf3e7] content-stretch flex flex-col h-[144px] items-center justify-center left-0 overflow-clip px-[50.5px] py-[20px] rounded-[40px] top-[160px]" data-name="Button">
      <Margin7 />
      <Container18 />
      <Margin8 />
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[18px] relative shrink-0 w-[14px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
        <g id="Container">
          <path d={svgPaths.p33e467dc} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow3() {
  return (
    <div className="bg-[#68d391] content-stretch flex items-center justify-center relative rounded-[16px] shadow-[0px_8px_24px_0px_rgba(255,138,61,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <Container21 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start pb-[12px] relative shrink-0 w-[48px]" data-name="Margin">
      <BackgroundShadow3 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] text-center w-[56px]">
        <p className="leading-[20px] whitespace-pre-wrap">用药计划</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-center w-[80px]">
        <p className="leading-[15px] whitespace-pre-wrap">一键建档终身陪伴</p>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute right-[16px] size-[45px] top-[8px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="Container" opacity="0.1">
          <path d={svgPaths.p30ec3718} fill="var(--fill-0, #1E293B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#f0f9f4] content-stretch flex flex-col h-[144px] items-center justify-center left-[187px] overflow-clip px-[45.5px] py-[20px] rounded-[40px] top-[160px]" data-name="Button">
      <Margin9 />
      <Container22 />
      <Margin10 />
      <Container24 />
    </div>
  );
}

function Section() {
  return (
    <div className="h-[304px] relative shrink-0 w-full" data-name="Section">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[8px] relative shrink-0 w-[14px]" data-name="Margin">
      <div className="bg-[#ff8a3d] h-[16px] rounded-[9999px] shrink-0 w-[6px]" data-name="Background" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Heading 3">
      <Margin11 />
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[16px] w-[64.02px]">
        <p className="leading-[24px] whitespace-pre-wrap">近期记录</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[7px] mr-[-0.01px] relative shrink-0 w-[4.317px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31667 7">
        <g id="Container">
          <path d={svgPaths.p35022f90} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] mr-[-0.01px] relative shrink-0 text-[#94a3b8] text-[12px] text-center w-[24.02px]">
        <p className="leading-[16px] whitespace-pre-wrap">全部</p>
      </div>
      <Container26 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Button5 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[20.5px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20.5">
        <g id="Container">
          <path d={svgPaths.p3c81a00} fill="var(--fill-0, #FF8A3D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#ffedd5] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[48px] z-[2]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[16px] shadow-[0px_0px_0px_4px_white] size-[48px] top-0" data-name="Overlay+Shadow" />
      <Container29 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] leading-[0] relative shrink-0" data-name="Paragraph">
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[16px] justify-center relative shrink-0 text-[#ff8a3d] text-[12px]">
        <p className="leading-[16px] whitespace-pre-wrap">10月24日</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[20px] justify-center relative shrink-0 text-[#1e293b] text-[14px]">
        <p className="leading-[20px] whitespace-pre-wrap">年度疫苗接种</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[19.5px] whitespace-pre-wrap">狂犬病和DHPP加强免疫。未发现异常反应。</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Container31 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative z-[1]" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <Container30 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex isolate items-start relative shrink-0 w-full" data-name="Container">
      <Background3 />
      <Margin12 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p8d38a40} fill="var(--fill-0, #7EC1FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[48px] z-[2]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[16px] shadow-[0px_0px_0px_4px_white] size-[48px] top-0" data-name="Overlay+Shadow" />
      <Container33 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] leading-[0] relative shrink-0" data-name="Paragraph">
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[16px] justify-center relative shrink-0 text-[#7ec1ff] text-[12px]">
        <p className="leading-[16px] whitespace-pre-wrap">10月20日</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[20px] justify-center relative shrink-0 text-[#1e293b] text-[14px]">
        <p className="leading-[20px] whitespace-pre-wrap">体重记录</p>
      </div>
    </div>
  );
}

function Margin14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[27.09px] pl-[4px] top-[10px]" data-name="Margin">
      <div className="flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] uppercase w-[13.11px]">
        <p className="leading-[15px] whitespace-pre-wrap">kg</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#10b981] text-[10px] w-[35.06px]">
        <p className="leading-[15px] whitespace-pre-wrap">+0.2 kg</p>
      </div>
    </div>
  );
}

function Margin15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[44.2px] pl-[4px] top-[8px]" data-name="Margin">
      <Background5 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] left-0 text-[#1e293b] text-[18px] top-[14px] w-[27.09px]">
        <p className="leading-[28px] whitespace-pre-wrap">3.5</p>
      </div>
      <Margin14 />
      <Margin15 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph2 />
      <Container35 />
    </div>
  );
}

function Margin13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative z-[1]" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <Container34 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex isolate items-start relative shrink-0 w-full" data-name="Container">
      <Background4 />
      <Margin13 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[18px] relative shrink-0 w-[21.9px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9 18">
        <g id="Container">
          <path d={svgPaths.p27fb4640} fill="var(--fill-0, #FF9EB5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#fdf2f8] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[48px] z-[2]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[16px] shadow-[0px_0px_0px_4px_white] size-[48px] top-0" data-name="Overlay+Shadow" />
      <Container37 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] leading-[0] relative shrink-0" data-name="Paragraph">
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[16px] justify-center relative shrink-0 text-[#ff9eb5] text-[12px]">
        <p className="leading-[16px] whitespace-pre-wrap">10月15日</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[20px] justify-center relative shrink-0 text-[#1e293b] text-[14px]">
        <p className="leading-[20px] whitespace-pre-wrap">日常体征</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[19.5px] whitespace-pre-wrap">精神状态良好，食欲正常，毛发顺滑。</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
      <Container39 />
    </div>
  );
}

function Margin16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative z-[1]" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <Container38 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex isolate items-start relative shrink-0 w-full" data-name="Container">
      <Background6 />
      <Margin16 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="absolute bg-[#fff7ed] bottom-[16px] left-[23px] top-[16px] w-[2px]" data-name="Vertical Divider" />
      <Container28 />
      <Container32 />
      <Container36 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white relative rounded-[24px] shadow-[0px_8px_24px_0px_rgba(255,138,61,0.08)] shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[20px] relative w-full">
        <Container25 />
        <Container27 />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] relative w-full">
        <Section />
        <Section1 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#ff8a3d] text-[10px] text-center w-[20px]">
        <p className="leading-[15px] whitespace-pre-wrap">首页</p>
      </div>
    </div>
  );
}

function Margin17() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container40 />
    </div>
  );
}

function Button6() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center left-[36.59px] top-[calc(50%-9.5px)]" data-name="Button">
      <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
          <path d={svgPaths.p1820480} fill="var(--fill-0, #FF8A3D)" id="Icon" />
        </svg>
      </div>
      <Margin17 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-center w-[20px]">
        <p className="leading-[15px] whitespace-pre-wrap">社区</p>
      </div>
    </div>
  );
}

function Margin18() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container41 />
    </div>
  );
}

function Button7() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center left-[101.8px] top-[calc(50%-9.5px)]" data-name="Button">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p20fd7a00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
      <Margin18 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-center w-[20px]">
        <p className="leading-[15px] whitespace-pre-wrap">消息</p>
      </div>
    </div>
  );
}

function Margin19() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container42 />
    </div>
  );
}

function Button8() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center left-[264.19px] top-[calc(50%-9.5px)]" data-name="Button">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p29ec5a00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
      <Margin19 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-center w-[20px]">
        <p className="leading-[15px] whitespace-pre-wrap">Ta的</p>
      </div>
    </div>
  );
}

function Margin20() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container43 />
    </div>
  );
}

function Button9() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center left-[329.39px] top-[calc(50%-9.5px)]" data-name="Button">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p301d5280} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
      <Margin20 />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
        <g id="Container">
          <path d={svgPaths.p2f5d9c00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#ff8a3d] content-stretch flex items-center justify-center p-[4px] relative rounded-[9999px] shrink-0 size-[56px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_8px_24px_0px_rgba(255,138,61,0.08)]" />
      <Container45 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bottom-[-20px] content-stretch flex flex-col items-start left-[32.14%] right-[32.14%]" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_SC:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[20px]">
        <p className="leading-[15px] whitespace-pre-wrap">添加</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[167px] top-[calc(50%-33.5px)]" data-name="Container">
      <Button10 />
      <Container46 />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.95)] bottom-0 h-[101px] left-0 w-[390px]" data-name="Nav">
      <div aria-hidden="true" className="absolute border-[#fff7ed] border-solid border-t inset-0 pointer-events-none" />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Container44 />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#fff9f2] content-stretch flex flex-col gap-[16px] items-center pb-[112px] pt-[48px] relative size-full" data-name="Body">
      <Header />
      <Main />
      <Nav />
    </div>
  );
}