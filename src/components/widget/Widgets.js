import Search from '@mui/icons-material/Search'
import React from 'react'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed';
import "./Widgets.css";

function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets_input">
                <Search className="widgets_searchIcon" />
                <input placeholder="キーワード検索" type="text" />
            </div>
            <div className="widgets_widgetContainer">
                <h2>いまどうしてる？</h2>

                {/* ライブラリを追加・追記 */}
                <TwitterTweetEmbed tweetId={"1614530363845677058"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="kobedenshi"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={"https://twitter.com/kobedenshi"}
                    options={{ text: "#Twitterclone 作成中", via: "kobedenshi" }}
                />
            </div>
        </div>
    )
}

export default Widgets
