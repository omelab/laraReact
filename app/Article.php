<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    public function index()
	{
	    $response = ['message' => 'article index'];
	    return response($response, 200);

	}
}
