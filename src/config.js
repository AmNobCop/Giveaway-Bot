module.exports = {
    app : {
        token: 'XXX',
        playing: 'giveaways 🎉',
        mongodb: 'XXX',
        globalCommands: false,
        slashGuild: 'XXX'
    },

    giveawayManager : {
        //Private Message Information.
        //If you set false, the bot will not send private message information to members who join the giveaway, for example.
        privateMessageInformation: true,
        giveawaysManagerRole: 'XXX',
        everyoneMention: false,
        reaction: '🎉'
    },
    
    messages: {
        giveaway: '🎉 **Giveaway**',
        giveawayEnded: '🎉 **Giveaway Ended**',
        title: 'Prize: {this.prize}',
        drawing: 'The giveaway ends in: {timestamp}',
        dropMessage: 'Be the first, and react to 🎉!',
        inviteToParticipate: 'React with 🎉 to enter the giveaway!',
        winMessage: 'Congratulations, {winners}! You won **{this.prize}**!',
        embedFooter: '{this.winnerCount} winner(s)',
        noWinner: 'Giveaway cancelled, no valid participations.',
        hostedBy: 'Hosted by: {this.hostedBy}',
        winners: 'Winner(s):',
        endedAt: 'Ended at',
        paused: '⚠️ **This giveaway is paused!**',
        infiniteDurationText: '`NEVER`',
        congrat: 'New winner(s): {winners}! Congratulations, your prize is **{this.prize}**!',
        error: 'Reroll cancelled, no valid participations.'
    }
}
