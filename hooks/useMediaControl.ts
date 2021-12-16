import { useState, useEffect } from "react";

const useAudioPlayer = () => {
    const [duration, setDuration] = useState<number>();
    const [curTime, setCurTime] = useState<number>();
    const [playing, setPlaying] = useState(false);
    const [clickedTime, setClickedTime] = useState<number | null>();

    useEffect(() => {
        const audio = document.getElementById("audio") as HTMLAudioElement;
        if (audio) {
            // state setters wrappers
            const setAudioData = () => {
                setDuration(audio.duration);
                setCurTime(audio.currentTime);
            };

            const setAudioTime = () => setCurTime(audio.currentTime);

            // DOM listeners: update React state on DOM events
            audio.addEventListener("loadeddata", setAudioData);

            audio.addEventListener("timeupdate", setAudioTime);

            // React state listeners: update DOM on React state changes
            if (playing) {
                audio.play();
            } else {
                audio.pause();
            }

            if (clickedTime && clickedTime !== curTime) {
                audio.currentTime = clickedTime;
                setClickedTime(null);
            }

            // effect cleanup
            return () => {
                audio.removeEventListener("loadeddata", setAudioData);
                audio.removeEventListener("timeupdate", setAudioTime);
            };
        }
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {};
    }, [playing, clickedTime, curTime]);

    return {
        curTime,
        duration,
        playing,
        setPlaying,
        setClickedTime,
    };
};

export default useAudioPlayer;
