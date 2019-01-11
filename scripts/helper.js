class Helper {

  playPauseAndUpdate (song) {
    const totalTime = player.getDuration();
    $('#time-control .total-time').text(player.prettyTime(totalTime));
    player.playPause(song);
  }

}

var helper = new Helper;
