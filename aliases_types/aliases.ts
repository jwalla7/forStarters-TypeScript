/**
 * 
 * A type alias is a name for any type, or union of types.
 * You cannot use type aliases to create different/distinct versions of the same type.
 * 
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
 * 
 */

type BasketballShotPoints = {
    jump_shot: '2' | 2;
    free_throw: '1' | 1;
    layup: '2' | 2;
    reverse_layup: '2' | 2;
    hook_shot: '2' | 2;
    fade_away: '2' | 2;
    dunk: '2' | 2;
    reverse_dunk: '2' | 2;
    three_point_shot: '3' | 3;
};

type recordShot = 'as-number' | 'as-text';

function playerPointsPerGame(shot_type: BasketballShotPoints, recordShot) {

}


