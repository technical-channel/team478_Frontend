import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import CreateNFT from "../view/CreateNFT/CreateNFT";

import HomePage from "./../view/Home/HomePage";
import Collection from "../view/Collection/Collection";

import Users from "../view/Users/Users";

import NFTPage from "../view/NFT/NFTPage";
import UserPage from "../view/Users/UserPage";
import Setting from "../view/Profile/Setting";

import ExplorePage from "../view/ExplorePage";
import NFT from "../view/NFT/NFT";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<HomePage />} />
          {/* <Route path="/collection" element={<Collection />} /> */}
          <Route path="/explore" element={<ExplorePage />}>
            <Route index element={<NFT />} />
            <Route path="nft" element={<NFT />} />

            <Route path="users" element={<Users />} />
          </Route>

          <Route path="/nft/nftpage" element={<NFTPage />} />
          <Route path="/users/userpage" element={<UserPage />} />

          <Route path="/create" element={<CreateNFT />} />

          <Route path="/user_page" element={<UserPage />} />

          <Route path="/setting" element={<Setting />} />
        </Route>
       
      </Routes>
    </div>
  );
};

export default Routing;
