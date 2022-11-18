import React from "react";
import NFTCard from "../../components/Cards/NFTCard/NFTCard";
import { SearchComponent } from "../../components/Header/Header";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
const UserPage = () => {
  const items = [
    {
      //   label: "Event",
    },
  ];
  const FakeData = [
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzE2NjIuZ2lm",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzE0LmdpZg==",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzE1MzEuZ2lm",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzUzNjIuZ2lm",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzU0MDIuZ2lm",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzY3ODMuZ2lm",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzQ5NDQuZ2lm",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzE1MzEuZ2lm",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzUzNjIuZ2lm",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzY3ODMuZ2lm",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzQ5NDQuZ2lm",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzE0LmdpZg==",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzE1MzEuZ2lm",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzUzNjIuZ2lm",
    },
   
  ];
  return (
    <div>
      <div className="max-w-[1500px] mx-auto py-5">
        <img
          src={process.env.PUBLIC_URL + "/assets/collectionpage.png"}
          className="w-full mx-auto px-2"
        />

        <div className="flex justify-between items-center flex-col md:flex-row gap-5 py-5 md:px-[20px] px-0 ">
          <div className="flex-1 md:max-w-[800px] px-2  w-full ">
            <div className="flex items-center gap-4">
            <h1 className="capitalize text-2xl text-black ">gods unchained</h1>
            <img src={process.env.PUBLIC_URL+"/assets/right.png"} alt=""/>
            </div>
            

            <p>
              LIŔONA is a creator of minimalistic ⨯ bold graphic and digital
              artwork. ✹ Artist / Creative Director ✹ #NFT minting
            </p>
            <div className="flex items-center gap-5 md:flex-nowrap   justify-start  flex-wrap ">
              <button className="capitalize bg-black  px-[30px] py-2 text-white rounded-lg text-md">
                + follow
              </button>

              {/* <button className="text-grey  mx-2 my-2  px-[30px] py-2 capitalize rounded-lg bg-cyan">
                message
              </button> */}

              {/* <div className="p-3 bg-cyan rounded-lg">
                <img
                  src={process.env.PUBLIC_URL + "./assets/download.png"}
                  className="w-full mx-auto"
                />
              </div> */}
              {/* <div className="p-3 bg-cyan rounded-lg">
                <img
                  src={process.env.PUBLIC_URL + "./assets/dots.png"}
                  className="w-full mx-auto "
                />
              </div> */}
            </div>
          </div>

          <div className="  border p-5 rounded-lg justify-between  px-5">
            <div className="flex  gap-[40px]  justify-between items-center">
              <h4 className="capitalize text-grey text-sm">followers</h4>
              <h4 className="text-sm  font-bold uppercase">19.9 K </h4>
            </div>
            <div className="flex  gap-[40px] justify-between items-center pb-2">
              <h4 className="capitalize text-grey text-sm">following</h4>
              <h4 className="text-sm  font-bold uppercase">42</h4>
            </div>

            <hr />
            <div className="flex  gap-[40px] justify-between items-center pt-5">
              <h4 className="capitalize text-grey text-sm">Address</h4>
              <h4 className="text-sm  font-bold uppercase">0xacb...fe2c </h4>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-[20px] md:px-[20px] px-0  my-10">
          <div className="border bg-cyan p-2 rounded-lg px-5">
            <button className="capitalize text-lg "> {"<"} filter </button>
          </div>

          <div className="flex-1">
            <SearchComponent placeholder={"by nfts"} />
          </div>
        </div>
        <div className="flex max-w-[1500px] flex-col md:flex-row  mx-auto justify-center gap-[20px] px-2  md:max-h-[700px] h-auto w-full ">
          <div className="sticky md:h-screen h-auto md:top-[120px] top-0 z-[100] bg-white  max-h-[700px]  ">
            <div className="border-b-2 pb-4">
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className=" px-3 py-3">
                    <h4 className="capitalize font-bold text-lg p-0 m-0">
                      status
                    </h4>

                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              <div className="flex gap-5  pt-5 pb-3">
                <button className="bg-black rounded-lg px-4 py-3 text-white capitalize">
                  all
                </button>
                <button className="bg-cyan rounded-lg px-4 py-3 text-black font-bold capitalize">
                  buy now
                </button>
              </div>
              <button className="bg-cyan rounded-lg px-4 py-3 text-black font-bold capitalize">
                live auction
              </button>
            </div>
            <div className="border-b-2 pb-4">
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className=" px-3 py-3">
                    <h4 className="capitalize font-bold text-lg p-0 m-0">
                      price
                    </h4>

                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              <div className="flex gap-5  items-center pt-5 pb-3">
                <button className="bg-cyan rounded-lg px-4 py-3 text-grey font-bold capitalize">
                  min
                </button>
                <p className="p-0 m-0 text-grey">to</p>
                <button className="bg-cyan rounded-lg px-4 py-3 text-grey font-bold capitalize">
                  max
                </button>
                <button className="bg-cyan rounded-lg px-4 py-3 text-black font-bold capitalize">
                  ETH
                </button>
              </div>
              <button className="bg-cyan rounded-lg px-4 py-3 text-black font-bold capitalize w-auto  md:w-full ">
                Apply
              </button>
            </div>
          </div>
<div className="max-h-[700px] overflow-y-scroll w-full">
<div className="grid  grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-4 ">
            {FakeData.map((item, key) => (
              <NFTCard key={key} data={item} />
            ))}
          </div>
</div>
          
        </div>
      </div>
    </div>
  );
};

export default UserPage;
