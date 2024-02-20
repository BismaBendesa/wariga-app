<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hitungan_segitiga', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('hasil_ramalan_pribadi_id');
            $table->string('kategori_mental');
            $table->integer('core_number');
            $table->integer('future_number');
            $table->timestamps();

            $table->foreign('hasil_ramalan_pribadi_id')->references('id')->on('hasil_ramalan_pribadi');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hitungan_segitiga');
    }
};
