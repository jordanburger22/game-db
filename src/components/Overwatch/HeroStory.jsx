import { useState } from "react";
import Button from 'react-bootstrap/Button';


function HeroStory({ story }) {

    const [isStoryShown, setIsStoryShown] = useState(false)

    const storyChapters = story.chapters.map(chapter => {
        return (
            <div className="overwatch--hero-story-chapter">
                <div>
                    <h1>{chapter.title}</h1>
                    <h4>{chapter.content}</h4>
                </div>
                <img src={chapter.picture} alt="" />
            </div>
        )
    })

    return (
        <div>

            <h3>{story.summary}</h3>
            <Button onClick={() => setIsStoryShown(prev => !prev)} variant="primary">{!isStoryShown ? 'See Story' : 'Hide Story'}</Button>

            {isStoryShown && storyChapters}

        </div>
    );
}

export default HeroStory;