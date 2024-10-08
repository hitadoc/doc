
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
          <div className="text-center text-black text-[28px]">HitaDAO 学赚奖励计划</div>
          <div className="text-gray-500 text-[16px] px-[30px] py-[10px] leading-[30px] indent-8">
            <p><strong>HitaDAO</strong> 推出"学赚" 奖励计划，生态收入将全部分配给 <strong>DAO</strong> 成员！任何参与者只需关注 <strong>HitaDAO</strong> 的 <a href="https://github.com/hitadao" target="_blank" className="text-blue-500 hover:text-blue-600 hover:text-[18px]">GitHub</a>，或者给予项目仓库星标，都可以获得积分。</p>
            <p>另外，学习者和贡献者还可以获得额外的奖励积分，参与者获得的积分将通过智能合约，自动发放到以太坊钱包地址。</p>
          </div>
      
          <hr className="mt-5 mb-5"/>
          <div className="text-red-500 text-[20px] px-[30px] pt-1 font-bold">1. 积分获取方法</div>

          <div className="text-gray-500 text-[18px] px-[40px] pt-3">a) <strong>Follow 奖励</strong></div>
          <div className="text-gray-500 text-[16px] px-[30px] py-[10px] leading-[30px] indent-8">
          <p>通过在 <strong>GitHub</strong> 上关注 <strong>HitaDAO</strong>，您将能够获得 <strong><span className="text-[20px] text-red-600">1000</span></strong> 积分的奖励。</p>
          <p className="leading-[50px]">操作步骤如下：</p>

          <p className="text-blue-500">第一步：登录您的 <strong>GitHub</strong>，访问 <strong>HitaDAO</strong> 的 <a href="https://github.com/hitadao" target="_blank" className="text-blue-500 hover:text-blue-600 hover:text-[18px]">GitHub</a>。</p> 
          <p>&nbsp;</p>
          <p className="text-blue-500">第二步：点击 <strong>Follow</strong> 按钮，完成关注。</p>
          <p><img src="/images/follow-arrow.jpg" className="w-full"/></p>
          <p>&nbsp;</p>
          </div>

          <div className="text-gray-500 text-[18px] px-[40px] pt-3">b) <strong>Star 奖励</strong></div>
          <div className="text-gray-500 text-[16px] px-[30px] py-[10px] leading-[30px] indent-8">

          <p>通过在 <strong>GitHub</strong> 对 <strong>HitaDAO</strong> 任何的项目仓库进行 <strong>Star</strong>，您将能够获得 <strong><span className="text-[20px] text-red-600">1000</span></strong> 积分的奖励。</p>
          <p>注意：<strong>Star</strong> 每一个项目，都会获得 1000 积分。</p>
          <p className="leading-[50px]">操作步骤如下：</p>

          <p className="text-blue-500">第一步：查看 <strong>HitaDAO</strong> 的所有项目，点击任何一个项目。</p>
          <p><img src="/images/star-list.jpg" className="w-full"/></p>
          <p>&nbsp;</p>
          <p className="text-blue-500">第二步：在项目页面中，点击 <strong>Star</strong> 按钮即可。</p>
          <p><img src="/images/star-arrow.jpg" className="w-full"/></p>
          <p>&nbsp;</p>
          </div>

          <hr className="mt-5 mb-5"/>
          <div className="text-red-500 text-[20px] px-[30px] pt-1 font-bold">2. 积分发放流程</div>
          <div className="text-gray-500 text-[16px] px-[30px] py-[10px] leading-[30px] indent-8">
          <p>您获得的积分将在 1 天内通过智能合约，自动发放到您的以太坊钱包地址。</p>
          <p className="leading-[50px]">操作步骤如下：</p>
          <p className="text-blue-500">第一步：在 <strong>HitaDAO</strong> 首页上，进入 <strong>hitadao</strong> 项目，点击 <strong>Issues</strong> 选项。</p>
          <p>&nbsp;</p>
          <p><img src="/images/issue-project.jpg" className="w-full"/></p>
          <p>&nbsp;</p>
          <p><img src="/images/issue-list.jpg" className="w-full"/></p>
          <p>&nbsp;</p>
          <p className="text-blue-500">第二步：在 <strong>Issues</strong> 页面，提交一个新的 <strong>issue</strong>。</p>
          <p><img src="/images/issue-new.jpg" className="w-full"/></p>
          <p>&nbsp;</p>
          <p className="text-blue-500">第三步：在 <strong>issue</strong> 的标题 <strong>title</strong> 中输入您的以太坊钱包地址，然后提交。</p>
          <p><img src="/images/issue-submit.jpg" className="w-full"/></p>
          <p>&nbsp;</p>
          </div>

          <hr className="mt-5 mb-5"/>
          <div className="text-red-500 text-[20px] px-[30px] pt-1 font-bold">3. 积分查询方法</div>
          <div className="text-gray-500 text-[16px] px-[30px] py-[10px] leading-[30px] indent-8"><p>您的积分记录在 <strong>Base</strong> 区块链的智能合约中，源代码开源，合约的部署地址为：<a href="https://basescan.org/address/0xe04Ba1b1d40E2a38Da424B9BF31f8EAC5aB98003" target="_blank" className="text-blue-500 hover:text-blue-600 hover:text-[18px]">0xe04Ba1b1d40E2a38Da424B9BF31f8EAC5aB98003</a>。</p>
          <p>您的积分不可交易，也无法转移，只作为分红的计算依据。</p>
          <p>&nbsp;</p>
          <p className="text-blue-500">1. 您可以通过智能合约的 <strong>balanceOf</strong> 方法，查看获得的积分：</p>
          <p><img src="/images/contract-balance.jpg" className="w-full"/></p>
          <p>&nbsp;</p>
          <p className="text-blue-500">2. 您也可以通过钱包，查看获得的积分：</p>
          <div className="flex justify-center items-center"><img src="/images/contract-wallet.jpg" className="w-[350px]"/></div>
          </div>

          <hr className="mt-5 mb-5"/>
          <div className="text-red-500 text-[20px] px-[30px] pt-1 font-bold">4. 注意事项</div>
          <div className="text-gray-500 text-[16px] px-[30px] py-[10px] leading-[30px] ">
            <ul className="list-disc mx-8">
              <li className="px-[0px]">请确保您的以太坊钱包地址准确无误，以便积分能够顺利发放至您的账户。</li>
              <li>一旦您取消对 <strong>HitaDAO</strong> 项目的关注或撤销星标，之前获得的积分将被系统收回。</li>
              <li>本积分激励机制的最终解释权归 <strong>HitaDAO</strong> 所有。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  );
};
export default Content;