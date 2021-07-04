<template>
    <section class="info">
        <aside class="avatar">
            <img src="@/assets/images/avatar.png" alt="avatar logo" width="80">
                <div class="avatar__names">
                    <p>First Name: <span class="avatar__names--name"> {{ userFname }} </span></p>
                    <p>Last Name:  <span class="avatar__names--name"> {{ userLname }}</span></p>
                </div>

                <div class="avatar__names">
                    <p>Your Username: <span class="avatar__names--name"> {{ userUsername }} </span></p>
                    <p>Rank:  
                        <span v-if="userRank == 1" class="avatar__names--name"> Admin </span>
                        <span v-if="userRank == 0" class="avatar__names--name"> Power User</span>
                    </p>
                </div>
        </aside>
    </section>
</template>

<script>
export default {
    props: ['userID', 'userFname', 'userLname', 'userUsername', 'userRank']
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';
@import '../assets/scss/_mixins.scss';

.avatar {
    // @include flexBasic (unset, center);
    border: 2px solid $lightgray;

    & img {
        margin: 10px;
    }

    &__names {
        flex: 1 1 200px;

        &--name {
                @include typo(1.3em, rgb(73, 71, 71), bold);
            }

        & p{
            @include setTypo;
        }
    }
}

input {
        outline: none;
        border: 1px solid black;
        @include fixedDim(250px, 35px);
        margin-top: 30px;
}

</style>