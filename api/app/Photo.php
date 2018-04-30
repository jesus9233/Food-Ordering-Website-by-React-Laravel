<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Photo
 *
 * @property int $id
 * @property string|null $path
 * @property int|null $food_id
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Photo whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Photo whereFoodId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Photo whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Photo wherePath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Photo whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Photo extends Model
{
    protected $fillable = ['path', 'food_id'];

    public function food()
    {
        return $this->belongsTo(Food::class);
    }

    public function getPath()
    {
        return asset("/storage" . $this->path);
    }

    public static function removeFile($location)
    {
        $filename = storage_path() . '/storage' . $location;
        try {
            unlink($filename);
        } catch (\ErrorException $e) {
        }
    }

    public function delete()
    {
        self::removeFile($this->path);
//        dd($this->path);
        return parent::delete(); // TODO: Change the autogenerated stub
    }
}
