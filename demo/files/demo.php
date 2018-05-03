<?php
abstract class Elg{
    const ENITY_ELG='awsome';

    /**
     * make some noise!
     * @return string - noise
     */
    public function moo() : string{
        return sprintf("%s is %s", __CLASS__,static::ENITY_ELG);
    }
}
$myElg = new Elg();

?>

<!-- also works on templates -->
<p>
    <?= $myElg->moo() ?>
</p>