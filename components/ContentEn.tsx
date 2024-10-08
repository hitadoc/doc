
const Content = () => {

  return (
    <div className="w-full flex-1 flex flex-col justify-center align-center bg-[#f4f4f4]">
      <div className="flex justify-center">
        <div className="bg-white">
          <img className="flex-1 px-4 py-4 w-[800px] h-[200px]" src="/images/hita-incentive.png"/>
        </div>
      </div>
      <div className="flex-1 w-full flex justify-center">
        <div className="mx-auto bg-white w-[800px] pb-[50px]">
          <div className="text-center text-black text-[28px]">HitaDAO Learn-to-Earn Incentive Program</div>
          <div className="text-gray-500 text-[16px] px-[30px] py-[10px] leading-[30px] indent-8">
            <p><strong>HitaDAO</strong> has launched the "Learn & Earn" reward program, where all ecological income will be distributed to <strong>DAO</strong> members!Any participant can earn points just by following HitaDAO’s <a href="https://github.com/hitadao" target="_blank" className="text-blue-500 hover:text-blue-600 hover:text-[18px]">GitHub</a> or giving the project repository a star.</p>
            <p>Additionally, learners and contributors can earn extra reward points. The points earned by participants will be automatically distributed to Ethereum wallet addresses via smart contracts.</p>
          </div>
      
          <hr className="mt-5 mb-5"/>
          <div className="text-red-500 text-[20px] px-[30px] pt-1 font-bold">1. Methods to Earn Points</div>

          <div className="text-gray-500 text-[18px] px-[40px] pt-3">a) <strong>Follow Reward</strong></div>
          <div className="text-gray-500 text-[16px] px-[30px] py-[10px] leading-[30px] indent-8">
          <p>By following <strong>HitaDAO</strong> on <strong>GitHub</strong>, you will earn a reward of 1,000 points.</p>
          <p className="leading-[50px]">Steps to follow:</p>

          <p className="text-blue-500">Step 1. Log in to your <strong>GitHub</strong> account and visit HitaDAO's <a href="https://github.com/hitadao" target="_blank" className="text-blue-500 hover:text-blue-600 hover:text-[18px]">GitHub</a> page.</p>
          <p>&nbsp;</p>
          <p className="text-blue-500">Step 2. Click the <strong>Follow</strong> button to complete the follow.</p>
          <p><img src="/images/follow-arrow.jpg" className="w-full"/></p>
          <p>&nbsp;</p>
          </div>

          <div className="text-gray-500 text-[18px] px-[40px] pt-3">b) <strong>Star Reward</strong></div>
          <div className="text-gray-500 text-[16px] px-[30px] py-[10px] leading-[30px] indent-8">

          <p>By starring any project repository of <strong>HitaDAO</strong> on <strong>GitHub</strong>, you will earn a reward of 1,000 points.</p>
          <p>Note: You will receive 1,000 points for each project starred.</p>
          <p className="leading-[50px]">Here are the steps to follow:</p>

          <p className="text-blue-500">Step 1. Browse all <strong>HitaDAO</strong> projects and click on any project.</p>
          <p><img src="/images/star-list.jpg" className="w-full"/></p>
          <p>&nbsp;</p>
          <p className="text-blue-500">Step 2. Click the <strong>Star</strong> button on the project page.</p>
          <p><img src="/images/star-arrow.jpg" className="w-full"/></p>
          <p>&nbsp;</p>
          </div>

          <hr className="mt-5 mb-5"/>
          <div className="text-red-500 text-[20px] px-[30px] pt-1 font-bold">2. Points Distribution Process</div>
          <div className="text-gray-500 text-[16px] px-[30px] py-[10px] leading-[30px] indent-8">
            <p>Your earned points will be automatically distributed to your Ethereum wallet address within 1 day via smart contracts.</p>
            <p className="leading-[50px]">Here are the steps to follow:</p>
            <p className="text-blue-500">Step 1. On the <strong>HitaDAO</strong> homepage, go to the <strong>hitadao</strong> project and click on the <strong>Issues</strong> option.</p>
            <p>&nbsp;</p>
            <p><img src="/images/issue-project.jpg" className="w-full"/></p>
            <p>&nbsp;</p>
            <p><img src="/images/issue-list.jpg" className="w-full"/></p>
            <p>&nbsp;</p>
            <p className="text-blue-500">Step 2. On the <strong>Issues</strong> page, submit a new <strong>issue</strong>.</p>
            <p><img src="/images/issue-new.jpg" className="w-full"/></p>
            <p>&nbsp;</p>
            <p className="text-blue-500">Step 3. In the <strong>issue</strong> title, enter your Ethereum wallet address, and submit.</p>
            <p><img src="/images/issue-submit.jpg" className="w-full"/></p>
            <p>&nbsp;</p>
          </div>

          <hr className="mt-5 mb-5"/>
          <div className="text-red-500 text-[20px] px-[30px] pt-1 font-bold">3. How to Check Your Points</div>
          <div className="text-gray-500 text-[16px] px-[30px] py-[10px] leading-[30px] indent-8"><p>Your points are recorded in the <strong>Base</strong>  blockchain smart contract, which is open-source. The contract deployment address is: <a href="https://basescan.org/address/0xe04Ba1b1d40E2a38Da424B9BF31f8EAC5aB98003" target="_blank" className="text-blue-500 hover:text-blue-600 hover:text-[18px]">0xe04Ba1b1d40E2a38Da424B9BF31f8EAC5aB98003</a>。</p>
          <p>Your points cannot be traded or transferred and are solely used as a basis for calculating dividends.</p>
          <p>&nbsp;</p>
          <p className="text-blue-500">1. You can check your points using the smart contract's <strong>balanceOf</strong> method:</p>
          <p><img src="/images/contract-balance.jpg" className="w-full"/></p>
          <p>&nbsp;</p>
          <p className="text-blue-500">2. You can also check your points through your wallet:</p>
          <div className="flex justify-center items-center"><img src="/images/contract-wallet.jpg" className="w-[350px]"/></div>
          </div>

          <hr className="mt-5 mb-5"/>
          <div className="text-red-500 text-[20px] px-[30px] pt-1 font-bold">4. Important Notes</div>
          <div className="text-gray-500 text-[16px] px-[30px] py-[10px] leading-[30px] ">
            <ul className="list-disc mx-8">
              <li className="px-[0px]">Please ensure that your Ethereum wallet address is accurate so that points can be successfully distributed to your account.</li>
              <li>If you unfollow the <strong>HitaDAO</strong> project or unstar a project, previously earned points will be reclaimed by the system.</li>
              <li>The final interpretation rights of this points incentive mechanism belong to <strong>HitaDAO</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  );
};
export default Content;